const users = [
  {
    userId: '1',
    name: 'hau',
  },
  {
    userId: '2',
    name: 'hau dang',
  },
];
const comments = [
  {
    commentId: '1',
    userId: '1',
    content: 'hay qua',
  },
  {
    commentId: '2',
    userId: '2',
    content: 'cam on',
  },
];

const fetchAPICMT = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(comments);
  }, 1000);
});
const fetchAPI = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([users, comments]);
  }, 1000);
});
fetchAPI
  .then((data) => {
    return data;
  })
  .then((data) => {
    let list = document.querySelector('.list');
    let html = '';
    const userid = data[0].map((user) => user.userId);
    data[1].map((comment) => {
      const user = userid.find((user) => user === user.comment);
      html += `<li>${user.name}: ${comment.content} </li>`;
    });
    list.innerHTML = html
  });


