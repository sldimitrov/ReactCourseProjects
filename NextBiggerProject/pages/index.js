import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Burgas%2C_Bulgaria_-_panoramio_%2814%29.jpg/375px-Burgas%2C_Bulgaria_-_panoramio_%2814%29.jpg",
    address: "Some address 5, 8500 Burgas/Bulgaria",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Samarsko_Zname_Panorama.jpg/375px-Samarsko_Zname_Panorama.jpg",
    address: "Some address 5, 3500 Stara Zagora/Bulgaria",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Shumen_chitalishte_Dobri_Voynikov.jpg/375px-Shumen_chitalishte_Dobri_Voynikov.jpg",
    address: "Shumen",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps(context) {
  // fetch data from an API

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

export default HomePage;
