import React from 'react';
import {
  Container, Title, Img, Text,
} from './styles';

const Post: React.FC = () => (
  <Container>
    <Title>
      xxx
    </Title>
    <Img
      src="/images/1.jpg"
    />
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus ornare rhoncus. Suspendisse id enim eget dui malesuada dictum non id diam. Sed facilisis luctus sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc vel mi vitae urna dignissim malesuada. Nam vehicula laoreet quam at tempus. Maecenas vitae diam ut ipsum condimentum vulputate sed nec metus. Aenean quis mollis dui, at aliquet enim.

      Aenean placerat accumsan velit, quis tempor lectus efficitur eget. Maecenas fermentum diam in libero molestie, vitae vulputate mi lobortis. Donec varius lacinia mauris a pharetra. Proin dapibus ornare risus, sit amet laoreet velit lacinia ac. Nullam posuere, sapien eget tincidunt vestibulum, felis erat porta urna, gravida placerat tortor justo pulvinar metus. Aliquam pharetra suscipit diam sit amet pulvinar. Vivamus laoreet accumsan orci et mattis. Morbi vitae interdum neque, a fringilla velit. Praesent gravida pulvinar lectus sit amet convallis. Aliquam est augue, interdum vitae pellentesque nec, tristique quis lorem. Curabitur dapibus, dui sit amet laoreet tincidunt, diam justo tincidunt augue, nec posuere ex urna in purus.
    </Text>
  </Container>
);

export default Post;
