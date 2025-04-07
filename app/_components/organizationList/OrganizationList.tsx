import clsx from "clsx";
import "./OrganizationList.css";

interface OrganizationLogo {
  login: string;
  avatarUrl: string;
}

interface OrganizationListProps {
  logos: OrganizationLogo[];
}

const OrganizationList: React.FC<OrganizationListProps> = ({ logos }) => {
  return (
    <div className="organizations-main-div mt-10">
      <ul className="dev-icons-orgs">
        {logos.map((logo, index) => {
          // Calculate delay in a way that Tailwind can understand
          const delayClass = `delay-[${index * 70}ms]`;

          return (
            <li
              key={logo.login}
              className={clsx(
                "organizations-inline",
                "animate-bounce",
                "shadow-2xl",
                "shadow-accent",
                delayClass // Apply the dynamic delay
              )}
              title={logo.login}
              style={{
                animationDelay: `${index * 0.07}s`, // Fallback for browsers that don't support Tailwind's arbitrary values
              }}
            >
              <img
                className="organizations-img"
                src={logo.avatarUrl}
                alt={logo.login}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OrganizationList;
