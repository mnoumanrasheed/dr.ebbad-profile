const sharp = require('sharp');
const path = require('path');
(async () => {
  const srcPath = path.resolve('logo.png');
  const outDark = path.resolve('public/brand/logo-custom-dark.png');
  const outLight = path.resolve('public/brand/logo-custom-light.png');
  const outFaviconPng = path.resolve('public/favicon.png');
  const outFaviconIco = path.resolve('public/favicon.ico');
  const outAppIcon = path.resolve('app/icon.png');
  const outAppleIcon = path.resolve('app/apple-icon.png');
  const brandColor = '#E8C66B';

  // Convert the supplied white-background logo into a transparent RGBA asset.
  // Dark pixels (the EN mark, stethoscope, and lettering) retain full opacity;
  // near-white pixels are made transparent with a soft edge for antialiasing.
  const removeWhiteBackground = async (pipeline) => {
    const { data, info } = await pipeline
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    for (let i = 0; i < data.length; i += info.channels) {
      const red = data[i];
      const green = data[i + 1];
      const blue = data[i + 2];
      const average = (red + green + blue) / 3;
      if (average > 90) {
        data[i + 3] = Math.round(data[i + 3] * ((255 - average) / 165));
      }
    }

    return sharp(data, {
      raw: { width: info.width, height: info.height, channels: info.channels },
    });
  };

  // Trim before background extraction so the visible mark fills its canvas.
  const transparentLogo = (await removeWhiteBackground(
    sharp(srcPath).trim({ background: "#ffffff", threshold: 10 })
  )).extend({
    top: 18,
    bottom: 18,
    left: 24,
    right: 24,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  });

  // One consistent premium champagne-gold treatment for every brand surface.
  await transparentLogo.clone().modulate({ saturation: 0 }).tint(brandColor).toFile(outDark);
  await transparentLogo.clone().modulate({ saturation: 0 }).tint(brandColor).toFile(outLight);

  // A monogram crop is legible as a favicon; the complete lockup is too small.
  const icon = await removeWhiteBackground(
    sharp(srcPath)
      .extract({ left: 190, top: 290, width: 890, height: 590 })
  );

  await icon.clone().modulate({ saturation: 0 }).tint(brandColor).resize(64, 64, { fit: 'contain' }).toFile(outFaviconPng);
  await icon.clone().modulate({ saturation: 0 }).tint(brandColor).resize(512, 512, { fit: 'contain' }).toFile(outAppIcon);
  await icon.clone().modulate({ saturation: 0 }).tint(brandColor).resize(180, 180, { fit: 'contain' }).toFile(outAppleIcon);

  // Keep a compatible fallback for clients that request /favicon.ico directly.
  const fs = require('fs');
  fs.copyFileSync(outFaviconPng, outFaviconIco);

  // The browser icons use the clean vector monogram, not the legacy raster logo.
  const monogramPath = path.resolve('public/brand/monogram.svg');
  await sharp(monogramPath).resize(64, 64).png().toFile(outFaviconPng);
  await sharp(monogramPath).resize(512, 512).png().toFile(outAppIcon);
  await sharp(monogramPath).resize(180, 180).png().toFile(outAppleIcon);
  fs.copyFileSync(outFaviconPng, outFaviconIco);

  console.log('Logo assets generated');
})();
