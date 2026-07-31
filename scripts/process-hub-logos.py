from pathlib import Path
import numpy as np
from PIL import Image


def content_bbox(arr, alpha_thr=8):
    a = arr[:, :, 3]
    ys, xs = np.where(a > alpha_thr)
    if len(xs) == 0:
        return None
    return int(xs.min()), int(ys.min()), int(xs.max()) + 1, int(ys.max()) + 1


def crop_center_square(im, pad=4, size=128):
    arr = np.array(im.convert("RGBA"))
    bb = content_bbox(arr)
    if not bb:
        return im.convert("RGBA").resize((size, size), Image.Resampling.LANCZOS)
    x0, y0, x1, y1 = bb
    cropped = arr[y0:y1, x0:x1]
    h, w = cropped.shape[:2]
    side = max(h, w) + pad * 2
    canvas = np.zeros((side, side, 4), dtype=np.uint8)
    oy = (side - h) // 2
    ox = (side - w) // 2
    canvas[oy : oy + h, ox : ox + w] = cropped
    out = Image.fromarray(canvas, "RGBA")
    return out.resize((size, size), Image.Resampling.LANCZOS)


def knock_near_white(im, thr=235):
    arr = np.array(im.convert("RGBA"))
    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    near = (r >= thr) & (g >= thr) & (b >= thr)
    arr[near, 3] = 0
    return Image.fromarray(arr, "RGBA")


def knock_near_black(im, thr=40):
    arr = np.array(im.convert("RGBA"), dtype=np.float32)
    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    lum = (r + g + b) / 3.0
    new_a = np.clip((lum - thr) / (255 - thr) * 255, 0, 255)
    orig_a = arr[:, :, 3]
    arr[:, :, 3] = np.minimum(orig_a, new_a)
    arr[lum <= thr, 3] = 0
    return Image.fromarray(arr.astype(np.uint8), "RGBA")


roots = [
    Path(r"d:\dakinis-systems\packages\shared-brand\assets\hub-logos"),
    Path(r"d:\dakinis-systems\apps\landing\packages\shared-brand\assets\hub-logos"),
    Path(r"d:\dakinis-systems\hub\packages\shared-brand\assets\hub-logos"),
]

src = roots[1]
lf = knock_near_white(Image.open(src / "lifeflow.png"))
lf = crop_center_square(lf, pad=6, size=128)
sa = knock_near_black(Image.open(src / "streamautomator.png"))
sa = crop_center_square(sa, pad=40, size=128)
core = crop_center_square(Image.open(src / "core.png"), pad=2, size=128)

for root in roots:
    root.mkdir(parents=True, exist_ok=True)
    lf.save(root / "lifeflow.png", optimize=True)
    sa.save(root / "streamautomator.png", optimize=True)
    core.save(root / "core.png", optimize=True)
    print("wrote", root)
    for name in ["core.png", "lifeflow.png", "streamautomator.png"]:
        im = Image.open(root / name)
        px = im.convert("RGBA")
        w, h = px.size
        print(
            " ",
            name,
            im.size,
            "corner",
            px.getpixel((0, 0)),
            "center",
            px.getpixel((w // 2, h // 2)),
        )
