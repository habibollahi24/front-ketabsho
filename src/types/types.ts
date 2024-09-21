export type CategoryType = {
  _id: string;
  title: string;
  englishTitle: string;
  description: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CommentType = {
  _id: string;
  user: {
    _id: string;
    name: string;
    avatar: string;
    avatarUrl: string;
  };
  content: {
    text: string;
  };
  status: number;
  openToComment: boolean;
  createdAt: string;
  answers: [
    {
      content: {
        text: string;
      };
      status: number;
      openToComment: boolean;
      createdAt: string;
      _id: string;
      user: {
        _id: string;
        name: string;
        avatar: string;
        avatarUrl: string;
      };
    }
  ];
};

export type BlogType = {
  _id: string;
  title: string;
  slug: string;
  category: {
    _id: string;
    title: string;
    slug: string;
  };
  type: string;
  briefText: string;
  text: string;
  coverImage: string;
  readingTime: number;
  tags: any[];
  author: {
    _id: string;
    name: string;
    avatar: string;
    avatarUrl: string;
  };
  related: {
    _id: string;
    title: string;
    slug: string;
    category: {
      _id: string;
      title: string;
      slug: string;
    };
    coverImage: string;
    author: {
      _id: string;
      name: string;
      avatar: string;
      avatarUrl: string;
    };
    coverImageUrl: string;
    id: string;
  }[];
  createdAt: Date;
  updatedAt: Date;
  coverImageUrl: string;
  id: string;
  likesCount: number;
  isLiked: boolean;
  isBookmarked: boolean;
  comments: CommentType[];
  commentsCount: number;
};
