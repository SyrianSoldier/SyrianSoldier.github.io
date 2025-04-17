# [pillowApi简易文档](https://blog.csdn.net/qq_57143062/article/details/141938953)

# pip install pillow
from PIL import Image, ImageDraw
from math import inf

# 创建空白图像
width, height = 1000, 800
image = Image.new("RGB", (width, height), "white")

# 创建画笔, 画笔要指定画布(会话的图像)
draw = ImageDraw.Draw(image)

# 定义原点
origin_x, origin_y = width // 2, height // 2


# 定义坐标轴点转换函数
# pillow的原点位于左上角, 数学直角坐标系原点位于画像中点, 所以需要一个转换函数
def convert(math_point):
    x = origin_x + math_point[0]
    y = origin_y - math_point[1]

    if x == inf:
        x = width
    elif x == -inf:
        x = 0

    if y == inf:
        y = height
    elif y == -inf:
        y = 0

    return (int(x), int(y))


draw.line([convert((-inf, 0)),convert((inf, 0))],fill="black")  # x轴
draw.line([convert((0, inf)), convert((0, -inf))], fill="black")  # y轴

# 恐龙的二维向量点集
points = [
    (6, 4),
    (3, 1),
    (1, 2),
    (-1, 5),
    (-2, 5),
    (-3, 4),
    (-4, 4),
    (-5, 3),
    (-5, 2),
    (-2, 2),
    (-5, 1),
    (-4, 0),
    (-2, 1),
    (-1, 0),
    (0, -3),
    (-1, -4),
    (1, -4),
    (2, -3),
    (1, -2),
    (3, -1),
    (5, 1),
    (6, 4),
]

# 将所有数据放大50倍, 要不画出的恐龙太小
scaled_points = [(x * 50, y * 50) for x, y in points]

draw.line([(convert(point)) for point in scaled_points], fill="blue", width=2)
image.save("output.png")
image.show()  # 可选：直接显示图像

