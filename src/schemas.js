class One_Image {}
One_Image.schema = {
  name: 'One_Image',
  properties: {
    userId: 'string',
    imageId: 'string',
    imageUri: 'string',
    imageWidth: 'double',
    imageRatio: 'double',
    imageMime: 'string?'
  }
};

class Comment {}
Comment.schema = {
  name: 'Comment',
  primaryKey: 'commentId',
  properties: {
    commentId: 'string',
    userId: 'string',
    comment: 'string',
    like: { // user_id
      type: 'list',
      objectType: 'string',
      default: []
    }
  }
};

class Post {}
Post.schema = {
  name: 'Post',
  primaryKey: "postId",
  properties: {
    userId: 'string',
    postId: 'string',
    description: 'string?',
    mainPostHeight: 'double', // height / width
    scrapbook: { // user_id
      type: 'list',
      objectType: 'string',
      default: []
    },
    like: { // user_id
      type: 'list',
      objectType: 'string',
      default: []
    },
    date: {
      type: 'date',
      default: new Date()
    },
    images: { // image & id
      type: 'list',
      objectType: 'string'
    },
    tag: {
      type: 'list',
      objectType: 'string',
      default: []
    },
    comments: {
      type: 'list',
      objectType: 'Comment',
      default: []
    }
  }
};

class LookBook {}
LookBook.schema = {
  name: 'LookBook',
  primaryKey: 'lookbookId',
  properties: {
    userId: 'string',
    lookbookId: 'string',
    title: {
      type: 'string?',
      default: 'undefined',
    },
    tags: {
      type: 'list',
      objectType: 'string',
      default: []
    },
    Outer: {
      type: 'string?',
      default: null
    },
    T_shirt: {
      type: 'string?',
      default: null
    },
    Dress: {
      type: 'string?',
      default: null
    },
    Trousers: {
      type: 'string?',
      default: null
    },
    Skirt: {
      type: 'string?',
      default: null
    },
    Shoes: {
      type: 'string?',
      default: null
    },
    Hats: {
      type: 'string?',
      default: null
    },
    Accessories: {
      type: 'string?',
      default: null
    },
  }
};

class Clothes {}
Clothes.schema = {
  name: 'Clothes',
  primaryKey: "clothesId",
  properties: {
    clothesId: 'string',
    description: 'string?',
    isPublic: {
      type: 'bool',
      default: false
    },
    date: {
      type: 'date',
      default: new Date()
    },
    image: 'string',
    tag: {
      type: 'list',
      objectType: 'string',
      default: []
    }
  }
};

class Closet {} // ex) T-shirt, dress
Closet.schema = {
  name: 'Closet',
  primaryKey: "closetName",
  properties: {
    closetName: 'string',
    closetId: 'string',
    description: 'string?',
    isPublic: {
      type: 'bool',
      default: false
    },
    clothes: {
      type: 'list',
      objectType: 'Clothes'
    }
  }
};

class User {}
User.schema = {
  name: 'User',
  primaryKey: "userId",
  properties: {
    userId: 'string',
    username: 'string?',
    email: 'string?',
    password: 'string?',
    mainImage: {
      type: 'string?',
    },
    scrapbook: { //post_id
      type: 'list',
      objectType: 'string',
      default: []
    },
    posts: {
      type: 'list',
      objectType: 'Post',
      default: []
    },
    closet: {
      type: 'list',
      objectType: 'string',
      default: []
    },
    followerList: {
      type: 'list',
      objectType: 'string',
      default: []
    },
    followingList: {
      type: "list",
      objectType: 'string',
      default: []
    },
    lookBookList: {
      type: "list",
      objectType: 'string',
      default: []
    },
    isDeleted: {
      type: 'bool',
      default: false
    }
  }
};

class Tag {}
Tag.schema = {
  name: 'Tag',
  primaryKey: 'tagName',
  properties: {
    tagName: 'string',
    postIdList: {
      type: 'list',
      objectType: 'string',
      default: []
    },
    clothesIdList: {
      type: 'list',
      objectType: 'string',
      default: []
    }
  }
};

export {
  One_Image,
  Comment,
  Post,
  LookBook,
  Clothes,
  Closet,
  User,
  Tag
}