# React Number Animation

一个用于数字动画过渡的 React 组件库，提供了两种组件：`AnimatedNumber` 和 `Statistic`。

## 安装

```bash
npm install react-number-animation
# 或
yarn add react-number-animation
```

## 使用方法

### AnimatedNumber

一个简单的数字动画组件，支持数字的上下滑动过渡效果。

```tsx
import { AnimatedNumber } from 'react-number-animation';

function App() {
    const [value, setValue] = useState(0);

    return (
        <div>
            <AnimatedNumber value={value} className="text-4xl" />
            <button onClick={() => setValue((v) => v + 1)}>增加</button>
            <button onClick={() => setValue((v) => v - 1)}>减少</button>
        </div>
    );
}
```

### Statistic

一个统计数字组件，支持数字的平滑过渡动画，以及格式化选项。

```tsx
import { Statistic } from 'react-number-animation';

function App() {
    return (
        <div>
            {/* 基础用法 */}
            <Statistic value={14.56} title="销售额" prefix="¥" />

            {/* 带小数点的用法 */}
            <Statistic value={1234.56} decimals={2} title="增长率" suffix="%" />

            {/* 自定义格式化 */}
            <Statistic
                value={1234567}
                separator=" " // 使用空格作为千位分隔符
                title="访问量"
                suffix="次"
            />

            {/* 不使用分组 */}
            <Statistic value={123} useGrouping={false} title="ID" />
        </div>
    );
}
```

## Props

### AnimatedNumber

| 属性名    | 类型   | 默认值 | 说明         |
| --------- | ------ | ------ | ------------ |
| value     | number | -      | 要显示的数字 |
| className | string | ""     | 自定义类名   |

### Statistic

| 属性名      | 类型      | 默认值 | 说明                 |
| ----------- | --------- | ------ | -------------------- |
| value       | number    | -      | 要显示的数字         |
| title       | ReactNode | -      | 标题                 |
| prefix      | ReactNode | -      | 前缀                 |
| suffix      | ReactNode | -      | 后缀                 |
| className   | string    | ""     | 自定义类名           |
| duration    | number    | 2000   | 动画持续时间（毫秒） |
| decimals    | number    | 0      | 小数位数             |
| separator   | string    | ","    | 千位分隔符           |
| decimal     | string    | "."    | 小数点符号           |
| useGrouping | boolean   | true   | 是否使用千位分组     |

## 开发

```bash
# 安装依赖
npm install

# 构建
npm run build

# 测试
npm test
```

## License

MIT
