import React from 'react';
import { View, Text } from 'react-native'; // Importing necessary components from react-native

export default function DDList() {
  const data = {
    id: 'iis',
    name: 'TODO',
    items: [
      {
        title: 'Hello',
        link: '/note/[id]',
        hidden: false,
        info: 'this is for idk ok',
        tags: ['idk', 'ok']
      }
    ]
  };

  return (
    <View>

      {data.items.map(({ title, link, hidden, info, tags }, index) => (
        <View key={index}>
          <Text>{title}</Text>
          <Text>{info}</Text>
          <Text>{tags.join(', ')}</Text>
        </View>
      ))}



    </View>
  );
}

