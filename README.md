# @coderlzw/react-number-animation

一个用于数字动画过渡的 React 组件库，提供了两种不同的数字动画效果。

## 安装

```bash
npm install @coderlzw/react-number-animation
# 或
yarn add @coderlzw/react-number-animation
# 或
pnpm add @coderlzw/react-number-animation
```

## 组件

### Statistic

一个带有标题、前缀和后缀的统计数字组件，支持数字格式化和平滑过渡动画。

#### 属性

| 属性名 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| value | number | - | 要显示的数字值 |
| title | React.ReactNode | - | 统计数字的标题 |
| prefix | React.ReactNode | - | 数字前缀 |
| suffix | React.ReactNode | - | 数字后缀 |
| className | string | '' | 自定义类名 |
| duration | number | 2000 | 动画持续时间（毫秒） |
| decimals | number | 0 | 小数位数 |
| separator | string | ',' | 千位分隔符 |
| decimal | string | '.' | 小数点符号 |
| useGrouping | boolean | true | 是否使用千位分组 |

#### 示例

```tsx
import { Statistic } from '@coderlzw/react-number-animation';

function App() {
  return (
    <Statistic
      value={1234567.89}
      title="总销售额"
      prefix="$"
      suffix="元"
      decimals={2}
      duration={1500}
    />
  );
}
```

### AnimatedNumber

一个纯数字动画组件，支持数字的上下滚动动画效果。

#### 属性

| 属性名 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| value | number | - | 要显示的数字值 |
| className | string | '' | 自定义类名 |

#### 示例

```tsx
import { AnimatedNumber } from '@coderlzw/react-number-animation';

function App() {
  return (
    <AnimatedNumber
      value={1234}
      className="custom-animation"
    />
  );
}
```

## 样式

组件使用原生 CSS 进行样式设置，你可以通过自定义类名来覆盖默认样式。

### Statistic 样式类

- `.statistic`: 统计组件容器
- `.statistic-title`: 标题样式
- `.statistic-content`: 内容容器
- `.statistic-prefix`: 前缀样式
- `.statistic-suffix`: 后缀样式
- `.statistic-value`: 数值样式

### AnimatedNumber 样式类

- `.animated-number`: 动画数字容器
- `.digit-container`: 单个数字容器

## 特性

- 🎯 高性能：使用 React.memo 优化渲染
- 🎨 可定制：支持自定义样式和动画参数
- 📦 轻量级：无额外依赖（除了 motion 库）
- 🎭 平滑动画：使用 easeOutExpo 缓动函数
- 🔢 数字格式化：支持千位分隔和小数点设置

## 浏览器支持

- Chrome >= 60
- Firefox >= 60
- Safari >= 12
- Edge >= 79

## 开发

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build
```

## 许可证

MIT
