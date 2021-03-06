import React, { useState } from 'react';

import PostItem from './PostItem';

import Avatar from '../assets/renan.jpg'

export default function PostList() {
    const [posts] = useState([
      {
        id: 1,
        author: {
          name: 'Paula Silva',
          avatar: 'https://randomuser.me/api/portraits/women/36.jpg'
        },
        date: '28 Mai 2020',
        content: 'Pessoal, alguém sabe se a TecWorld está contratando?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Renan Borba',
              avatar: Avatar
            },
            date: '28 Mai 2020',
            content:
              'A TecWorld está sempre em busca de novos talentos, geralmente ficam de olho em quem se destaca no Github, inclusive grande parte do time deles é composto por jovens talentos. Você pode encontrar um formulário de novos talentos no site da empresa'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Marcos Souza',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        date: '27 Mai 2020',
        content:
          'Fala galera, beleza?\nEstou fazendo o curso gratuito da DevCity de desenvolvimento e está sendo muito massa! Alguém aí mais fazendo? Comenta na publicação para trocarmos uma idéia e infos',
        comments: [
          {
            id: 4,
            author: {
              name: 'Michele Oliveira',
              avatar: 'https://randomuser.me/api/portraits/women/26.jpg'
            },
            date: '27 Mai 2020',
            content:
              'Também estou fazendo o curso e estou adorando! Estou no segundo módulo sobre React e estou ansiosa para o próximo sobre React Native'
          },
          {
            id: 5,
            author: {
              name: 'João Santos',
              avatar: 'https://randomuser.me/api/portraits/men/25.jpg'
            },
            date: '27 Mai 2020',
            content:
              'Que daoraa! Tô pensando em me inscrever na próxima turma pra ver qual é desse curso grátis, pq mesmo sendo gratuito, dizem que os devs saem super preparados'
          }
        ]
      },
      {
        id: 6,
        author: {
          name: 'Guilherme Pereira',
          avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
        },
        date: '26 Mai 2020',
        content:
          'Fala pessoal, td beleza?\nEstou a procura de oportunidades de dev',
        comments: [
          {
            id: 4,
            author: {
              name: 'Michele Oliveira',
              avatar: 'https://randomuser.me/api/portraits/women/26.jpg'
            },
            date: '26 Mai 2020',
            content:
              'Também tô na procura!'
          },
          {
            id: 5,
            author: {
              name: 'João Santos',
              avatar: 'https://randomuser.me/api/portraits/men/25.jpg'
            },
            date: '26 Mai 2020',
            content:
              'Poxa vida, ontem mesmo estava com duas vagas abertas aqui onde trabalho. Na próxima encaminho elas antes!'
          }
        ]
      }
    ])

    return (
      <div className="postlist">
        {/* Mapear posts para cada item */}
        { posts.map(post => (
          <PostItem key={ post.id } { ...post } />
        ))}
      </div>
    );
  };
