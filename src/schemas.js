class One_Image {}
One_Image.schema = {
  name: 'One_Image',
  properties: {
    userId: 'string',
    imageUri: 'string',
    imageWidth: 'double',
    imageRatio: 'double',
    imageMime: 'string'
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
    date: {
      type: 'date',
      default: new Date()
    },
    images: { // image & id
      type: 'list',
      objectType: 'One_Image'
    },
    tag: {
      type: 'list',
      objectType: 'string'
    },
    isDeleted: {
      type: 'bool',
      default: false
    }
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
    image: 'Image',
    tag: {
      type: 'list',
      objectType: 'string'
    },
    isDeleted: {
      type: 'bool',
      default: false
    }
  }
};

class Closet {}
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
    },
    isDeleted: {
      type: 'bool',
      default: false
    }
  }
};

class Scrap {}
Scrap.schema = {
  name: 'Scrap',
  primaryKey: "scrapId",
  properties: {
    scrapId: 'string',
    originUserId: 'string',
    isPublic: {
      type: 'bool',
      default: false
    },
    image: 'Image',
    tag: {
      type: 'list',
      objectType: 'string',
    },
    isDeleted: {
      type: 'bool',
      default: false
    }
  }
};

class User {}
User.schema = {
  name: 'User',
  primaryKey: "userId",
  properties: {
    userId: 'string',
    email: 'string',
    password: 'string',
    mainImage: {
      type: 'data?',
    },
    scrapbook: { //post_id or clothes_id
      type: 'list',
      objectType: 'Scrap'
    },
    posts: {
      type: 'list',
      objectType: 'Post'
    },
    closet: {
      type: 'list',
      objectType: 'Closet'
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
    // idList: {
    //   type: 'list?',
    //   objectType: 'One_Image'
    // }
  }
};

export {
  One_Image,
  Post,
  Clothes,
  Closet,
  Scrap,
  User,
  Tag
}