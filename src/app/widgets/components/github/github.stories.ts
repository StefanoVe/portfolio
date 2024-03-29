// YourComponent.stories.ts

import { Meta, Story } from '@storybook/angular';
import { GithubComponent } from './github.component';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Github',
  component: GithubComponent,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story = (args) => ({
  props: args,
});

export const FirstStory = Template.bind({});
FirstStory.args = {
  //👇 The args you need here will depend on your component
};
