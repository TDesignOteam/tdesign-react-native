import * as React from 'react';
import { StyleProp } from 'react-native';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { useTheme, ThemeType } from '../../theme';

interface WrapperProps<S> {
  className?: string;
  skeleton?: React.ReactElement;
  style?: StyleProp<S>;
}

const CreateWrapperComponent = <P extends object, S>(Component: React.ComponentType<P>) => {
  const parseClassName = (className: string, theme: ThemeType) => {
    const atomClassNames = [...Object.keys(theme.classnames || {})];
    const colorClassNames = [...Object.keys(theme.colors || {})];
    // const fontClassNames = [...Object.keys(theme.fonts || {})];
    const classnames = className
      ?.split(' ')
      ?.filter(Boolean)
      ?.map((name) => {
        if (atomClassNames.includes(name)) {
          return theme.classnames[name];
        }
        if (colorClassNames.includes(name)) {
          return { color: theme.colors[name as keyof typeof theme.colors] };
        }

        console.warn('无效的className:', name);
        return undefined;
      });
    return classnames;
  };

  const WrapperComponent = React.forwardRef<unknown, P & React.PropsWithChildren<WrapperProps<S>>>((props, ref) => {
    const { theme } = useTheme();
    let { children } = props;
    const { className = '', style, ...others } = props;
    const classNameToStyle = parseClassName(className, theme);

    // 如果是text给一个默认颜色
    let presetStyle = {};
    if (Component.displayName === 'Text') {
      presetStyle = { color: theme?.colors?.fontGray2 };
      // text没有先给一个空占位避免高度闪动，但显式传null就不占位
      if (!children && children !== null) {
        children = ' ';
      }
      // @ts-ignore
      if (!Array.isArray(children) && typeof children === 'object' && !children?.$$typeof) {
        console.warn(
          'Text不应该传入非字符，但是传入了：',
          children,
          '，位置：',
          `<${Component.displayName} ${className ? `className=${className}` : ''} ${
            style ? `style={${JSON.stringify(style)}}` : ''
          }>${JSON.stringify(children)}</${Component.displayName}>`,
        );
      }
    }

    return (
      <Component ref={ref} style={[{ position: 'relative' }, presetStyle, classNameToStyle, style]} {...(others as P)}>
        {children}
      </Component>
    );
  });

  WrapperComponent.displayName = `WrapperComponent(${Component.displayName || Component.name})`;
  // @ts-ignore
  WrapperComponent.propTypes = Component.propTypes;
  // @ts-ignore
  WrapperComponent.defaultProps = Component.defaultProps;
  hoistNonReactStatics(WrapperComponent, Component);

  return WrapperComponent;
};

export default CreateWrapperComponent;
