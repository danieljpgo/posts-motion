export interface Post{
  id: string,
  title: string,
  content: string[],
  src: string,
  info: {
    date: string,
    time: string,
  }
}

export const postData: Post[] = [
  {
    id: '1',
    title: '5 Food Apps for delivery',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et consectetur purus. In eu diam nec diam bibendum posuere nec sit amet nisi. Maecenas vitae consectetur ante. Integer convallis nibh sit amet mauris accumsan lacinia. Sed elementum ipsum posuere nunc tincidunt venenatis. Quisque placerat egestas est, ac rutrum nibh lacinia efficitur. Morbi in leo ante. In hac habitasse platea dictumst. In neque purus, congue vel eros venenatis, auctor vestibulum nisl. Sed nibh ligula, malesuada sit amet massa ut, lacinia molestie diam.',
      'Praesent ac fermentum purus. Cras ipsum leo, blandit sed fringilla eu, ultrices eu tortor. Praesent commodo nisl in scelerisque posuere. Aliquam malesuada lacus a sem eleifend, ac dapibus tellus fermentum. Vestibulum venenatis erat id metus venenatis, in volutpat nunc fringilla. Nam vel urna nec dui vehicula dapibus. Aenean varius a turpis in lobortis. Cras ac ante nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      'Cras suscipit feugiat ligula et pulvinar. Nullam id nisl imperdiet, aliquam magna ut, congue purus. Aenean at quam sem. Mauris sit amet dolor accumsan, faucibus lorem vitae, malesuada tortor. Donec eu tortor eu erat pharetra imperdiet sit amet sit amet arcu. In ut erat massa. Donec lacus massa, imperdiet quis nunc quis, dictum maximus tellus. In eleifend orci ante, id euismod nibh rhoncus et. Sed sed venenatis est. Duis in mi vehicula, gravida lectus vel, feugiat est. Suspendisse potenti. Phasellus enim ligula, rhoncus id erat nec, pulvinar rhoncus odio.',
      'Pellentesque ac ante eget magna pharetra tincidunt. Cras vestibulum consectetur neque non efficitur. Sed nec neque at odio congue facilisis. Sed vitae porttitor est. In tortor purus, iaculis id tempor quis, condimentum nec mauris. Pellentesque nisi tortor, convallis eu facilisis sed, vehicula sed dolor. Etiam accumsan blandit odio, at cursus magna porta quis.',
    ],
    src: '1.jpg',
    info: {
      date: 'May 1, 2019',
      time: '2 min read',
    },
  },
  {
    id: '2',
    title: 'Untitle',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et consectetur purus. In eu diam nec diam bibendum posuere nec sit amet nisi. Maecenas vitae consectetur ante. Integer convallis nibh sit amet mauris accumsan lacinia. Sed elementum ipsum posuere nunc tincidunt venenatis. Quisque placerat egestas est, ac rutrum nibh lacinia efficitur. Morbi in leo ante. In hac habitasse platea dictumst. In neque purus, congue vel eros venenatis, auctor vestibulum nisl. Sed nibh ligula, malesuada sit amet massa ut, lacinia molestie diam.',
      'Praesent ac fermentum purus. Cras ipsum leo, blandit sed fringilla eu, ultrices eu tortor. Praesent commodo nisl in scelerisque posuere. Aliquam malesuada lacus a sem eleifend, ac dapibus tellus fermentum. Vestibulum venenatis erat id metus venenatis, in volutpat nunc fringilla. Nam vel urna nec dui vehicula dapibus. Aenean varius a turpis in lobortis. Cras ac ante nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      'Cras suscipit feugiat ligula et pulvinar. Nullam id nisl imperdiet, aliquam magna ut, congue purus. Aenean at quam sem. Mauris sit amet dolor accumsan, faucibus lorem vitae, malesuada tortor. Donec eu tortor eu erat pharetra imperdiet sit amet sit amet arcu. In ut erat massa. Donec lacus massa, imperdiet quis nunc quis, dictum maximus tellus. In eleifend orci ante, id euismod nibh rhoncus et. Sed sed venenatis est. Duis in mi vehicula, gravida lectus vel, feugiat est. Suspendisse potenti. Phasellus enim ligula, rhoncus id erat nec, pulvinar rhoncus odio.',
      'Pellentesque ac ante eget magna pharetra tincidunt. Cras vestibulum consectetur neque non efficitur. Sed nec neque at odio congue facilisis. Sed vitae porttitor est. In tortor purus, iaculis id tempor quis, condimentum nec mauris. Pellentesque nisi tortor, convallis eu facilisis sed, vehicula sed dolor. Etiam accumsan blandit odio, at cursus magna porta quis.',
    ],
    src: '2.jpg',
    info: {
      date: 'May 1, 2019',
      time: '2 min read',
    },
  },
  {
    id: '3',
    title: 'Untitle',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et consectetur purus. In eu diam nec diam bibendum posuere nec sit amet nisi. Maecenas vitae consectetur ante. Integer convallis nibh sit amet mauris accumsan lacinia. Sed elementum ipsum posuere nunc tincidunt venenatis. Quisque placerat egestas est, ac rutrum nibh lacinia efficitur. Morbi in leo ante. In hac habitasse platea dictumst. In neque purus, congue vel eros venenatis, auctor vestibulum nisl. Sed nibh ligula, malesuada sit amet massa ut, lacinia molestie diam.',
      'Praesent ac fermentum purus. Cras ipsum leo, blandit sed fringilla eu, ultrices eu tortor. Praesent commodo nisl in scelerisque posuere. Aliquam malesuada lacus a sem eleifend, ac dapibus tellus fermentum. Vestibulum venenatis erat id metus venenatis, in volutpat nunc fringilla. Nam vel urna nec dui vehicula dapibus. Aenean varius a turpis in lobortis. Cras ac ante nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      'Cras suscipit feugiat ligula et pulvinar. Nullam id nisl imperdiet, aliquam magna ut, congue purus. Aenean at quam sem. Mauris sit amet dolor accumsan, faucibus lorem vitae, malesuada tortor. Donec eu tortor eu erat pharetra imperdiet sit amet sit amet arcu. In ut erat massa. Donec lacus massa, imperdiet quis nunc quis, dictum maximus tellus. In eleifend orci ante, id euismod nibh rhoncus et. Sed sed venenatis est. Duis in mi vehicula, gravida lectus vel, feugiat est. Suspendisse potenti. Phasellus enim ligula, rhoncus id erat nec, pulvinar rhoncus odio.',
      'Pellentesque ac ante eget magna pharetra tincidunt. Cras vestibulum consectetur neque non efficitur. Sed nec neque at odio congue facilisis. Sed vitae porttitor est. In tortor purus, iaculis id tempor quis, condimentum nec mauris. Pellentesque nisi tortor, convallis eu facilisis sed, vehicula sed dolor. Etiam accumsan blandit odio, at cursus magna porta quis.',
    ],
    src: '3.jpg',
    info: {
      date: 'May 1, 2019',
      time: '2 min read',
    },
  },
  {
    id: '4',
    title: 'Untitle',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et consectetur purus. In eu diam nec diam bibendum posuere nec sit amet nisi. Maecenas vitae consectetur ante. Integer convallis nibh sit amet mauris accumsan lacinia. Sed elementum ipsum posuere nunc tincidunt venenatis. Quisque placerat egestas est, ac rutrum nibh lacinia efficitur. Morbi in leo ante. In hac habitasse platea dictumst. In neque purus, congue vel eros venenatis, auctor vestibulum nisl. Sed nibh ligula, malesuada sit amet massa ut, lacinia molestie diam.',
      'Praesent ac fermentum purus. Cras ipsum leo, blandit sed fringilla eu, ultrices eu tortor. Praesent commodo nisl in scelerisque posuere. Aliquam malesuada lacus a sem eleifend, ac dapibus tellus fermentum. Vestibulum venenatis erat id metus venenatis, in volutpat nunc fringilla. Nam vel urna nec dui vehicula dapibus. Aenean varius a turpis in lobortis. Cras ac ante nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      'Cras suscipit feugiat ligula et pulvinar. Nullam id nisl imperdiet, aliquam magna ut, congue purus. Aenean at quam sem. Mauris sit amet dolor accumsan, faucibus lorem vitae, malesuada tortor. Donec eu tortor eu erat pharetra imperdiet sit amet sit amet arcu. In ut erat massa. Donec lacus massa, imperdiet quis nunc quis, dictum maximus tellus. In eleifend orci ante, id euismod nibh rhoncus et. Sed sed venenatis est. Duis in mi vehicula, gravida lectus vel, feugiat est. Suspendisse potenti. Phasellus enim ligula, rhoncus id erat nec, pulvinar rhoncus odio.',
      'Pellentesque ac ante eget magna pharetra tincidunt. Cras vestibulum consectetur neque non efficitur. Sed nec neque at odio congue facilisis. Sed vitae porttitor est. In tortor purus, iaculis id tempor quis, condimentum nec mauris. Pellentesque nisi tortor, convallis eu facilisis sed, vehicula sed dolor. Etiam accumsan blandit odio, at cursus magna porta quis.',
    ],
    src: '4.jpg',
    info: {
      date: 'May 1, 2019',
      time: '2 min read',
    },
  },
  {
    id: '5',
    title: 'Untitle',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et consectetur purus. In eu diam nec diam bibendum posuere nec sit amet nisi. Maecenas vitae consectetur ante. Integer convallis nibh sit amet mauris accumsan lacinia. Sed elementum ipsum posuere nunc tincidunt venenatis. Quisque placerat egestas est, ac rutrum nibh lacinia efficitur. Morbi in leo ante. In hac habitasse platea dictumst. In neque purus, congue vel eros venenatis, auctor vestibulum nisl. Sed nibh ligula, malesuada sit amet massa ut, lacinia molestie diam.',
      'Praesent ac fermentum purus. Cras ipsum leo, blandit sed fringilla eu, ultrices eu tortor. Praesent commodo nisl in scelerisque posuere. Aliquam malesuada lacus a sem eleifend, ac dapibus tellus fermentum. Vestibulum venenatis erat id metus venenatis, in volutpat nunc fringilla. Nam vel urna nec dui vehicula dapibus. Aenean varius a turpis in lobortis. Cras ac ante nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      'Cras suscipit feugiat ligula et pulvinar. Nullam id nisl imperdiet, aliquam magna ut, congue purus. Aenean at quam sem. Mauris sit amet dolor accumsan, faucibus lorem vitae, malesuada tortor. Donec eu tortor eu erat pharetra imperdiet sit amet sit amet arcu. In ut erat massa. Donec lacus massa, imperdiet quis nunc quis, dictum maximus tellus. In eleifend orci ante, id euismod nibh rhoncus et. Sed sed venenatis est. Duis in mi vehicula, gravida lectus vel, feugiat est. Suspendisse potenti. Phasellus enim ligula, rhoncus id erat nec, pulvinar rhoncus odio.',
      'Pellentesque ac ante eget magna pharetra tincidunt. Cras vestibulum consectetur neque non efficitur. Sed nec neque at odio congue facilisis. Sed vitae porttitor est. In tortor purus, iaculis id tempor quis, condimentum nec mauris. Pellentesque nisi tortor, convallis eu facilisis sed, vehicula sed dolor. Etiam accumsan blandit odio, at cursus magna porta quis.',
    ],
    src: '5.jpg',
    info: {
      date: 'May 1, 2019',
      time: '2 min read',
    },
  },
  {
    id: '6',
    title: 'Untitle',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et consectetur purus. In eu diam nec diam bibendum posuere nec sit amet nisi. Maecenas vitae consectetur ante. Integer convallis nibh sit amet mauris accumsan lacinia. Sed elementum ipsum posuere nunc tincidunt venenatis. Quisque placerat egestas est, ac rutrum nibh lacinia efficitur. Morbi in leo ante. In hac habitasse platea dictumst. In neque purus, congue vel eros venenatis, auctor vestibulum nisl. Sed nibh ligula, malesuada sit amet massa ut, lacinia molestie diam.',
      'Praesent ac fermentum purus. Cras ipsum leo, blandit sed fringilla eu, ultrices eu tortor. Praesent commodo nisl in scelerisque posuere. Aliquam malesuada lacus a sem eleifend, ac dapibus tellus fermentum. Vestibulum venenatis erat id metus venenatis, in volutpat nunc fringilla. Nam vel urna nec dui vehicula dapibus. Aenean varius a turpis in lobortis. Cras ac ante nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      'Cras suscipit feugiat ligula et pulvinar. Nullam id nisl imperdiet, aliquam magna ut, congue purus. Aenean at quam sem. Mauris sit amet dolor accumsan, faucibus lorem vitae, malesuada tortor. Donec eu tortor eu erat pharetra imperdiet sit amet sit amet arcu. In ut erat massa. Donec lacus massa, imperdiet quis nunc quis, dictum maximus tellus. In eleifend orci ante, id euismod nibh rhoncus et. Sed sed venenatis est. Duis in mi vehicula, gravida lectus vel, feugiat est. Suspendisse potenti. Phasellus enim ligula, rhoncus id erat nec, pulvinar rhoncus odio.',
      'Pellentesque ac ante eget magna pharetra tincidunt. Cras vestibulum consectetur neque non efficitur. Sed nec neque at odio congue facilisis. Sed vitae porttitor est. In tortor purus, iaculis id tempor quis, condimentum nec mauris. Pellentesque nisi tortor, convallis eu facilisis sed, vehicula sed dolor. Etiam accumsan blandit odio, at cursus magna porta quis.',
    ],
    src: '6.jpg',
    info: {
      date: 'May 1, 2019',
      time: '2 min read',
    },
  },
];
