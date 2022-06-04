import Post from './models/post';

export default function createFakeData() {
  //0,1,...39로 이루어진 배열을 생성한 후 포스트 데이터로 변환
  const posts = [...Array(40).keys()].map((i) => ({
    title: `포스트 #${i}`,
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo risus libero, at ultricies orci egestas nec. Cras sed arcu quis neque porttitor imperdiet sed vitae elit. Donec fermentum, sapien vitae egestas luctus, sapien sapien interdum nunc, sit amet sagittis est nisl sed ipsum. Suspendisse sed feugiat magna, sed venenatis nisl. Aliquam placerat, risus ac euismod sollicitudin, risus nulla venenatis lacus, non euismod orci lectus vitae libero. Fusce consequat elementum lorem non gravida. Donec sollicitudin odio nec elit commodo varius. Praesent metus nisl, elementum sed dolor finibus, porttitor hendrerit nunc. Sed non blandit sapien, vel eleifend erat. Praesent dapibus lacus a justo tincidunt ultricies ac tincidunt dolor.',
    tags: ['fake', 'data'],
  }));
  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
