const dotenv = require("dotenv");
dotenv.config();

const openSource = {
  githubConvertedToken: `${process.env.REACT_APP_GITHUB_CONVERTED_TOKEN}`,
  githubUserName: `${process.env.REACT_APP_GITHUB_USERNAME}`,
};

let fs = require("fs");

const query_pr = {
  query: `
	query {
	  user(login: "${openSource.githubUserName}"){
	    pullRequests(last: 100, orderBy: {field: CREATED_AT, direction: DESC}){
      totalCount
      nodes{
        id
        title
        url
        state
	      mergedBy {
	          avatarUrl
	          url
	          login
	      }
	      createdAt
	      number
        changedFiles
	      additions
	      deletions
        baseRepository {
	          name
	          url
	          owner {
	            avatarUrl
	            login
	            url
	          }
	        }
      }
    }
	}
}
	`,
};

const query_issue = {
  query: `query{
		user(login: "${openSource.githubUserName}") {
    issues(last: 100, orderBy: {field:CREATED_AT, direction: DESC}){
      totalCount
      nodes{
      	id
        closed
        title
        createdAt
        url
        number
        assignees(first:100){
          nodes{
            avatarUrl
            name
            url
          }
        }
        repository{
          name
          url
          owner{
            login
            avatarUrl
            url
          }
        }
      }
    }
  }
	}`,
};

const query_org = {
  query: `query{
	user(login: "${openSource.githubUserName}") {
	    repositoriesContributedTo(last: 100){
	      totalCount
	      nodes{
	        owner{
	          login
	          avatarUrl
	          __typename
	        }
	      }
	    }
	  }
	}`,
};

const query_pinned_projects = {
  query: `
	query { 
	  user(login: "${openSource.githubUserName}") { 
	    pinnedItems(first: 6, types: REPOSITORY) {
	      totalCount
	      nodes{
	        ... on Repository{
	          id
		          name
		          createdAt,
		          url,
		          description,
		          isFork,
		          languages(first:10){
		            nodes{
		              name
		            }
		          }
	        }
	      }
		  }
	  }
	}
	`,
};

const baseUrl = "https://api.github.com/graphql";

const headers = {
  "Content-Type": "application/json",
  Authorization: "bearer " + openSource.githubConvertedToken,
};

fetch(baseUrl, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(query_pr),
})
  .then((response) => response.text())
  .then((txt) => {
    const data = JSON.parse(txt);
    let cropped = { data: [] };
    cropped["data"] = data["data"]["user"]["pullRequests"]["nodes"];

    let open = 0;
    let closed = 0;
    let merged = 0;
    for (let i = 0; i < cropped["data"].length; i++) {
      if (cropped["data"][i]["state"] === "OPEN") open++;
      else if (cropped["data"][i]["state"] === "MERGED") merged++;
      else closed++;
    }

    cropped["open"] = open;
    cropped["closed"] = closed;
    cropped["merged"] = merged;
    cropped["totalCount"] = cropped["data"].length;

    console.log("Fetching the Pull Request Data.\n");
    fs.writeFile(
      "./app/shared/opensource/pull_requests.json",
      JSON.stringify(cropped),
      function (err) {
        if (err) {
          console.log(err);
        }
      }
    );
  })
  .catch((error) => console.log(JSON.stringify(error)));

fetch(baseUrl, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(query_issue),
})
  .then((response) => response.text())
  .then((txt) => {
    const data = JSON.parse(txt);
    let cropped = { data: [] };
    cropped["data"] = data["data"]["user"]["issues"]["nodes"];

    let open = 0;
    let closed = 0;
    for (let i = 0; i < cropped["data"].length; i++) {
      if (cropped["data"][i]["closed"] === false) open++;
      else closed++;
    }

    cropped["open"] = open;
    cropped["closed"] = closed;
    cropped["totalCount"] = cropped["data"].length;

    console.log("Fetching the Issues Data.\n");
    fs.writeFile(
      "./app/shared/opensource/issues.json",
      JSON.stringify(cropped),
      function (err) {
        if (err) {
          console.log(err);
        }
      }
    );
  })
  .catch((error) => console.log(JSON.stringify(error)));

const fetchAllOrganizations = async () => {
  const query = {
    query: `query {
      user(login: "${openSource.githubUserName}") {
        # Organizations you've contributed to
        repositoriesContributedTo(first: 100) {
          nodes {
            owner {
              ... on Organization {
                login
                name
                avatarUrl
                description
                websiteUrl
              }
            }
          }
        }
        
        # All organizations you're associated with
        organizations(first: 100) {
          nodes {
            login
            name
            avatarUrl
            description
            websiteUrl
          }
        }
      }
    }`,
  };

  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(query),
    });

    const data = await response.json();

    if (data.errors) {
      throw new Error(data.errors[0].message);
    }

    // Combine all organization sources
    const contributedOrgs = data.data.user.repositoriesContributedTo.nodes
      .map((node) => node.owner)
      .filter((org) => org && org.__typename === "Organization");

    const memberOrgs = data.data.user.organizations.nodes;

    const allOrgs = [...contributedOrgs, ...memberOrgs];

    // Deduplicate by login name
    const uniqueOrgs = allOrgs.reduce((acc, org) => {
      if (!acc.some((o) => o.login === org.login)) {
        acc.push(org);
      }
      return acc;
    }, []);

    // Save results
    fs.writeFileSync(
      "./app/shared/opensource/organizations.json",
      JSON.stringify(
        {
          data: uniqueOrgs,
          totalCount: uniqueOrgs.length,
          updatedAt: new Date().toISOString(),
        },
        null,
        2
      )
    );

    console.log(`✅ Found ${uniqueOrgs.length} organizations`);
  } catch (error) {
    console.error("Error fetching organizations:", error.message);
  }
};

// Run the function
fetchAllOrganizations();

const languages_icons = {
  Python: "logos-python",
  "Jupyter Notebook": "logos-jupyter",
  HTML: "logos-html-5",
  CSS: "logos-css-3",
  JavaScript: "logos-javascript",
  "C#": "logos-c-sharp",
  Java: "logos-java",
};

fetch(baseUrl, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(query_pinned_projects),
})
  .then((response) => response.text())
  .then((txt) => {
    const data = JSON.parse(txt);
    // console.log(txt);
    const projects = data["data"]["user"]["pinnedItems"]["nodes"];
    let newProjects = { data: [] };
    for (let i = 0; i < projects.length; i++) {
      let obj = projects[i];
      let langobjs = obj["languages"]["nodes"];
      let newLangobjs = [];
      for (let j = 0; j < langobjs.length; j++) {
        if (langobjs[j]["name"] in languages_icons) {
          newLangobjs.push({
            name: langobjs[j]["name"],
            iconifyClass: languages_icons[langobjs[j]["name"]],
          });
        }
      }
      obj["languages"] = newLangobjs;
      newProjects["data"].push(obj);
    }

    console.log("Fetching the Pinned Projects Data.\n");
    fs.writeFile(
      "./app/shared/opensource/projects.json",
      JSON.stringify(newProjects),
      function (err) {
        if (err) {
          console.log(
            "Error occured in pinned projects 1",
            JSON.stringify(err)
          );
        }
      }
    );
  })
  .catch((error) =>
    console.log("Error occured in pinned projects 2", JSON.stringify(error))
  );
