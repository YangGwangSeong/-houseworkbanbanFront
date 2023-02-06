import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {Card} from 'react-native-paper'
import {Agenda} from 'react-native-calendars'
import { useState } from 'react'

const timeToString = (time) => {
  const date = new Date(time)
  return date.toISOString().split('T')[0]
}

const Calendar = ({navigation}) => {
  const [items, setItmes] = useState({})

  const loadItems = (day) => {
    setTimeout(() => {
      for(let i = -15; i < 85; i++){
        const time = day.timestamp + i * 24 * 60 * 60 * 1000
        const strTime = timeToString(time)

        if(!items[strTime]){
          items[strTime] = []

          const numItems = Math.floor(Math.random() * 3 + 1)
          for(let j = 0; j < numItems; j++){
            items[strTime].push({
              name: `Time for ${strTime} #${j}`,
              height: Math.max(10, Math.floor(Math.random() * 150)),
              day: strTime
            })
          }
        }
      }
      const newItems = {}
      Object.keys(items).forEach(key => {
        newItems[key] = items[key]
      })
      setItmes(newItems)
    }, 1000)
  }

  const renderItems = (item) => {
    return (
      <TouchableOpacity style={styles.item}>
        <Card>
          <Card.Content>
            <View>
              <Text>{item.name}</Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <Agenda 
      items={items}
      loadItemsForMonth={loadItems}
      refreshControl={null}
      showClosingKnob={true}
      refreshing={false}
      renderItem={renderItems} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  }
})

export default Calendar