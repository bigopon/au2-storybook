import Aurelia from 'aurelia';
import { MyButton } from '../src/button';
import './button.css';

export const createButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  onClick,
}) => {
  const host = document.createElement('div');
  host.innerHTML = '<my-button text.bind="label" size.bind="size" click.trigger="onClick">'
  Aurelia.register(MyButton).enhance({ 
    host,
    component: {
      label: label,
      size: size,
      onClick: onClick
    }
  });
  return host;
};
