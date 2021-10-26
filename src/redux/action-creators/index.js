// import youtube from '../../api/youtube';
import history from '../../history';

import {
  onSearch,
  onSearchSuccess,
  onSearchError,
  onSelectVideo,
} from '../actions';

const searchVideos = (term) => async (dispatch) => {
  try {
    dispatch(onSearch());
    // const { data } = await youtube.get('/search', {
    //   params: {
    //     q: `${term} coding`,
    //   },
    // });
    console.log(term);
    const items = [
      {
        kind: 'youtube#searchResult',
        etag: 'JJy98CNPUc6WoUV9WOY5m6X_XXY',
        id: {
          kind: 'youtube#video',
          videoId: 'Ke90Tje7VS0',
        },
        snippet: {
          publishedAt: '2018-07-16T16:51:44Z',
          channelId: 'UCWv7vMbMWH4-V0ZXdmDpPBA',
          title: 'React JS - React Tutorial for Beginners',
          description: 'React JS Tutorial - Get up & running with React JS: the most popular JavaScript library in the world! Want to master React? Get my React mastery course: ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/Ke90Tje7VS0/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/Ke90Tje7VS0/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Programming with Mosh',
          liveBroadcastContent: 'none',
          publishTime: '2018-07-16T16:51:44Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'ZWwLwwxUliFOONM2ml_-abylAeo',
        id: {
          kind: 'youtube#video',
          videoId: 'N3AkSS5hXMA',
        },
        snippet: {
          publishedAt: '2018-06-27T04:05:47Z',
          channelId: 'UCWv7vMbMWH4-V0ZXdmDpPBA',
          title: 'What Is React (React js) &amp; Why Is It So Popular?',
          description: 'What is React (React js)? This video explains it in 5 Minutes! React tutorial for beginners: https://youtu.be/Ke90Tje7VS0 Subscribe to my YouTube channel for ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/N3AkSS5hXMA/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/N3AkSS5hXMA/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/N3AkSS5hXMA/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Programming with Mosh',
          liveBroadcastContent: 'none',
          publishTime: '2018-06-27T04:05:47Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'zPnUrmssCAbKtthkKGWQladDkY8',
        id: {
          kind: 'youtube#video',
          videoId: 'MRIMT0xPXFI',
        },
        snippet: {
          publishedAt: '2019-12-18T18:30:01Z',
          channelId: 'UCRLEADhMcb8WUdnQ5_Alk7g',
          title: 'Learn REACT JS in just 5 MINUTES (2020)',
          description: 'You cannot MASTER React in 5 minutes, but here are all the main components you need to understand to call yourself a React developer. \u200d   Join Freemote ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/MRIMT0xPXFI/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/MRIMT0xPXFI/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/MRIMT0xPXFI/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Aaron Jack',
          liveBroadcastContent: 'none',
          publishTime: '2019-12-18T18:30:01Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'N8yIEeg38wsRV87ZROcGeSBWR1I',
        id: {
          kind: 'youtube#video',
          videoId: 'RGKi6LSPDLU',
        },
        snippet: {
          publishedAt: '2021-04-14T14:43:19Z',
          channelId: 'UCeVMnSShP_Iviwkknt83cww',
          title: 'React Tutorial in Hindi 🔥🔥',
          description: 'Join my Recently launched Complete & Free React Course with 3 Projects: https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/RGKi6LSPDLU/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/RGKi6LSPDLU/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/RGKi6LSPDLU/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'CodeWithHarry',
          liveBroadcastContent: 'none',
          publishTime: '2021-04-14T14:43:19Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: '0DSsAArjlutasMueb3qdGY9wxD8',
        id: {
          kind: 'youtube#video',
          videoId: 'gnkrDse9QKc',
        },
        snippet: {
          publishedAt: '2020-11-20T15:00:13Z',
          channelId: 'UC-8QAzbLcRglXeN_MY9blyw',
          title: 'Beginner React.js Coding Interview (ft. Clément Mihailescu)',
          description: 'I give Clément Mihailescu a mock React.js interview that is geared towards beginners. Checkout the video we made on Clem\'s channel: ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/gnkrDse9QKc/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/gnkrDse9QKc/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/gnkrDse9QKc/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Ben Awad',
          liveBroadcastContent: 'none',
          publishTime: '2020-11-20T15:00:13Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: '-8s78LNJ1mZjnjDXVITih4UOPh4',
        id: {
          kind: 'youtube#video',
          videoId: 'w7ejDZ8SWv8',
        },
        snippet: {
          publishedAt: '2021-01-18T19:01:11Z',
          channelId: 'UC29ju8bIPH5as8OGnQzwJyA',
          title: 'React JS Crash Course 2021',
          description: 'Get started with React in this crash course. We will be building a task tracker app and look at components, props, state, hooks, working with an API and more.',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/w7ejDZ8SWv8/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/w7ejDZ8SWv8/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/w7ejDZ8SWv8/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Traversy Media',
          liveBroadcastContent: 'none',
          publishTime: '2021-01-18T19:01:11Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'rummVcCBeitY9Eh5mA2hwfcbQdA',
        id: {
          kind: 'youtube#video',
          videoId: '02ieJ1YXZM4',
        },
        snippet: {
          publishedAt: '2020-06-30T23:00:11Z',
          channelId: 'UCsrVDPJBYeXItETFHG0qzyw',
          title: 'Live Coding a Shopping Cart using React',
          description: 'This is a live coding react (reactjs) tutorial for beginners where I program a simple shopping cart feature. If you are looking to learn react, check out this video.',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/02ieJ1YXZM4/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/02ieJ1YXZM4/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/02ieJ1YXZM4/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Web Dev Junkie',
          liveBroadcastContent: 'none',
          publishTime: '2020-06-30T23:00:11Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'NzSzlgMH8vWnJu7KmCzoqZ7C2-U',
        id: {
          kind: 'youtube#video',
          videoId: 'XtMThy8QKqU',
        },
        snippet: {
          publishedAt: '2020-07-09T22:16:40Z',
          channelId: 'UCqrILQNl5Ed9Dz6CGMyvMTQ',
          title: '🔴 How to Build a NETFLIX Clone with REACT JS for Beginners (in 3 Hours!)',
          description: 'Free Training on How to Become a Developer in 90 Days: ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/XtMThy8QKqU/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/XtMThy8QKqU/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/XtMThy8QKqU/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Clever Programmer',
          liveBroadcastContent: 'none',
          publishTime: '2020-07-09T22:16:40Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'frpB_aAz9mUS-OcZOX2GnGevZsI',
        id: {
          kind: 'youtube#video',
          videoId: '4UZrsTqkcW4',
        },
        snippet: {
          publishedAt: '2020-10-06T14:16:07Z',
          channelId: 'UC8butISFwT-Wl7EV0hUK0BQ',
          title: 'Full React Course 2020 - Learn Fundamentals, Hooks, Context API, React Router, Custom Hooks',
          description: 'Learn the basics of React in this comprehensive course. You will learn about fundamentals, hooks, context API, react router, custom hooks, and more. React is ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/4UZrsTqkcW4/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/4UZrsTqkcW4/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/4UZrsTqkcW4/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'freeCodeCamp.org',
          liveBroadcastContent: 'none',
          publishTime: '2020-10-06T14:16:07Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'SpC2DTfs66VusadHtXjUZJZuE44',
        id: {
          kind: 'youtube#video',
          videoId: '0-S5a0eXPoc',
        },
        snippet: {
          publishedAt: '2020-05-11T16:00:11Z',
          channelId: 'UCWv7vMbMWH4-V0ZXdmDpPBA',
          title: 'React Native Tutorial for Beginners - Build a React Native App [2020]',
          description: 'React Native Tutorial for Beginners - Learn to build an amazing React Native app for iOS & Android. Get the full React Native course: https://bit.ly/3f40a4l ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/0-S5a0eXPoc/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/0-S5a0eXPoc/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/0-S5a0eXPoc/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Programming with Mosh',
          liveBroadcastContent: 'none',
          publishTime: '2020-05-11T16:00:11Z',
        },
      },
    ];

    dispatch(onSearchSuccess(items));
  } catch (err) {
    dispatch(onSearchError());
  }
};

const setCurrentVideo = (video) => {
  history.push(`${video.etag}`);
  return onSelectVideo(video);
};

const actionCreators = {
  searchVideos,
  setCurrentVideo,
};

export default actionCreators;
