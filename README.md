API response model has following structure:

{
        id: int
        author: {
          name: string,
          avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
        },
        date: new Date(),
        content:
          string
        comments: [
          {
            id: int,
            author: {
              name: string,
              avatar: 'https://randomuser.me/api/portraits/women/26.jpg'
            },
            date: new Date(),
            content:
              string
          },
          {
            id: int,
            author: {
              name: string,
              avatar: 'https://randomuser.me/api/portraits/men/25.jpg'
            },
            date: new Date(),
            content:
              string
          }
        ]
      }

API calls requested using createAsnycThunk,

I would use redux toolkit for API integration and global state management.

For further investigation, reach out to me.


