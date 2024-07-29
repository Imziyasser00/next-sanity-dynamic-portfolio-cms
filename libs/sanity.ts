import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "gu7f29a1",
  apiVersion: "2024-07-30",
  dataset: "production",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export async function getLogo() {
  const query = `*[_type == "logo"][0]`;
  const logo = await client.fetch(query);
  return logo;
}

export async function getHero() {
  const query = `*[_type == "hero"][0]`;
  const hero = await client.fetch(query);
  return hero;
}

export async function getSkills() {
  const query = `*[_type == "skills"][0]`;
  const skills = await client.fetch(query);
  return skills;
}

export async function getAbout() {
  const query = `*[_type == "about"][0]`;
  const about = await client.fetch(query);
  return about;
}

export async function getProjects() {
  const query = `*[_type == "projects"][0]`;
  const projects = await client.fetch(query);
  return projects;
}

export async function getTestimonials() {
  const query = `*[_type == "testimonials"]{
    ...,
    "reviews": reviews[]-> {
      stars,
      reviewText,
      clientName,
      clientCompany,
      clientImage
    }
  }[0]`;
  const testimonials = await client.fetch(query);
  return testimonials;
}

export async function getConatct() {
  const query = `*[_type == "contact"][0]`;
  const contact = await client.fetch(query);
  return contact;
}


export async function getFooter() {
  const query = `*[_type == "footer"][0]`;
  const footer = await client.fetch(query);
  return footer;
}


export async function getMetadata() {
  const query = `*[_type == "metadata"][0]`;
  const metadat = await client.fetch(query);
  return metadat;
}

