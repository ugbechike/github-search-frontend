export interface IRepoResType {
  item: IGithubRepoType;
}

export interface IGithubRepoType {
  data: IData;
  search_text: string;
  search_type: string;
  size: number;
  page: number;
  has_more_data: boolean;
}

export interface IData {
  total_count: number;
  incomplete_results: boolean;
  items: IRepoItem[];
}

export interface IRepoItem {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: IOwner;
  html_url: string;
  description: null;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: null;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url: null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: null;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  permissions: IPermissions;
  score: number;
}

export interface IOwner {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface IPermissions {
  admin: boolean;
  push: boolean;
  pull: boolean;
}
