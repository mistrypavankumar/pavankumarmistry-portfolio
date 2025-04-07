interface User {
  avatarUrl: string;
  url: string;
  login: string;
}

interface RepositoryOwner {
  avatarUrl: string;
  login: string;
  url: string;
}

interface BaseRepository {
  name: string;
  url: string;
  owner: RepositoryOwner;
}

interface PullRequest {
  id: string;
  title: string;
  url: string;
  state: string;
  mergedBy: User;
  createdAt: string;
  number: number;
  changedFiles: number;
  additions: number;
  deletions: number;
  baseRepository: BaseRepository;
}

export { PullRequest, User, RepositoryOwner, BaseRepository };
