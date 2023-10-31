import { Cloudinary } from '@cloudinary/url-gen';
import { source } from '@cloudinary/url-gen/actions/overlay';
import { text } from '@cloudinary/url-gen/qualifiers/source';
import { TextStyle } from '@cloudinary/url-gen/qualifiers/textStyle';

export const cloudinary = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.CLOUDINARY_CLOUD_NAME,
  },
  url: {
    secure: true,
  },
});

export const getThumbnail = (title: string) => {
  const thumbnail = cloudinary
    .image('astro_course_template')
    .overlay(
      source(text(title, new TextStyle('Cabin', 64).fontWeight('bold')))
  );
  return thumbnail.toURL();
};
