import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return <MeetupDetail />;
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export function getStaticProps() {
  // fetch data from an API

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Pleven_TodorBozhinov_October_2009_%284%29.jpg/375px-Pleven_TodorBozhinov_October_2009_%284%29.jpg",
        id: meetupId,
        title: "First meetup",
        address: "Bourgas, Bogoridi 205",
        description: "This is the first meetup",
      },
    },
  };
}

export default MeetupDetail;
