import React from "react";

import { CenteredHeading } from "../../components/shared/heading";
import { RoundedImage } from "../../components/blog/image";
import {
  volumeRenderingEdgesImage,
  volumeRenderingFilteringImage,
  volumeRenderingTeaserImage,
} from "../images";

export const volumeRenderingTitle = "Volume Rendering for Medical Images";

export const volumeRenderingQuickSummary =
  "Using direct volume rendering with ray marching to render volumetric medical images. Implemented in WebGL.";

export const volumeRenderingBlog = (
  <div>
    <CenteredHeading text={volumeRenderingTitle} />
    <p>
      As part of developing{" "}
      <a href="https://visian.org" target="_blank" rel="noopener noreferrer">
        VISIAN
      </a>{" "}
      we explored direct volume rendering for 3D medical images. We use ray
      marching and local ambient occlusion for shading. To improve performance,
      we implemented progressive resolution and asynchronous, progressive
      computation of the local ambient occlusion. To increase the image quality,
      we use ray dithering. The volumetric rendering is fully integrated into{" "}
      <a href="https://visian.org" target="_blank" rel="noopener noreferrer">
        VISIAN
      </a>
      .
    </p>
    <RoundedImage
      image={volumeRenderingTeaserImage}
      subtitle="Brain MRI rendered with 3 different transfer functions. Left: MRI intensities. Middle: Cutting a cone into the MRI to reveal an occluded tumor segmentation. Right: Prominent edges in the MRI for context around the tumor segmentation."
    />
    <p>
      We have developed three different customizable transfer functions which
      serve different purposes. The edge transfer function semi-transparently
      displays pronounced edges in the MRI scans around the segmentations to
      give spatial context information while barely occluding the focus volumes.
      Additionally, it is useful to judge if a segmentation is correct by
      comparing the rendered edges with a segmentation volume. The edges are
      detected based on gradient magnitude and can be filtered from top and
      bottom.
    </p>
    <RoundedImage
      image={volumeRenderingEdgesImage}
      subtitle="The edges transfer function shows the edges of the brain ventricles on the left and the segmentation fills those bounds on the right."
    />
    <p>
      As VISIAN is a segmentation editor it is usually important to see the
      segmentations at a voxel level granularity. For this we apply nearest
      filtering to the image texture. However, it looks more natural when
      segmentations are tri-linearly filtered because the resulting volume is
      smoother.
    </p>
    <RoundedImage
      image={volumeRenderingFilteringImage}
      subtitle="The cone-clipping transfer function showing a white matter segmentation. On the left the segmentation is rendered voxel-exact, on the right it is smoothed."
    />
    <p>
      To render these images in such high quality even on low power devices
      without dedicated graphics cards we use progressive resolution. This means
      that whenever the user moves the virtual camera, we reduce the resolution
      in order to keep a high framerate. Then, when the user stops moving the
      camera, we progressively render a higher resolution off screen and flush
      it to the screen when the new higher resolution image is completely
      rendered. Rendering the higher resolution images progressively prevents
      lag spikes when the user starts moving the virtual camera during the
      rendering process of the higher resolution images because it means that
      the rendering process can be easily interrupted.
    </p>
    <p>
      VISIAN can be tried out{" "}
      <a
        href="https://app.visian.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>
      . If you have an MRI scan of yourself, try importing it, otherwise you can
      find open source sample MRIs on the internet. To enter the 3D view in
      VISIAN, open the view settings on the top-right of the screen.
    </p>
  </div>
);
