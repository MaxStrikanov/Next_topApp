import React from 'react';
import { Button, Htag, Ptag } from '../components';


export default function Home(): JSX.Element {
  return (
    < >
      <Htag tag='h1'>Text</Htag>
      <Button appearence='primary' arrow='right'>Button</Button>
      <Button appearence='ghost' arrow='right'>Button</Button>
      <Ptag size = 'm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus tempora cupiditate laboriosam quis nihil rerum officiis molestias magnam dicta. Assumenda similique eligendi qui non eaque vero placeat voluptatibus enim animi.</Ptag>
    </>
  );
}
