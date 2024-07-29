import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'gu7f29a1',
    apiVersion: '2024-07-29',
    dataset: 'production',
    useCdn: false,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any){
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
    console.log(skills)
    return skills;
  }