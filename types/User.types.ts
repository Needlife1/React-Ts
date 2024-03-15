export interface UserTypes {
  avatar: string;
  username: string;
  tag: string;
  location: string;
  stats: {
    followers: number;
    views: number;
    likes: number;
  };
}
