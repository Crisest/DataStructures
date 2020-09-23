const obj = [{
    id: 123112433
},
{
    id: 523123213
},{
    id: 123623213
}]

const forumID = 123623213


console.log(obj.some(item => item.id === forumID));