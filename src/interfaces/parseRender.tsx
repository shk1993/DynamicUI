import { IAttribute } from './attributes';
/**
 * the type of the render component return value
 */
export interface IRenderComponent {
  /** the React component to render as a string */
  component: string;

  /** attributes associated with the component to alter rendering the component in some way */
  attributes: IAttribute[] | undefined;
}
