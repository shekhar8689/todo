import { View, Text, StyleSheet, FlatList, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Header from '../../componets/Header'
import TodoCard from '../../componets/TodoCard'
import ActionButton from '../../componets/ActionButton'
import AddTodo from '../../componets/AddTodo'

export interface TodoData {
  id: string; 
  title: string;
  isCompleted: boolean;
  time: string;
}

const index = () => {
  const [open, setOpen] = useState(false);
  const [todo, setTodo] = useState("")
  const [data, setData] = useState<TodoData[]>([]);

  // code here to strored data in localStorage
  useEffect(()=>{
    loadTodos();
  },[]);

  useEffect(()=>{
    saveTodos();
  },[data]);

  const saveTodos = async ()=>{
    try {
      await AsyncStorage.setItem('todos',JSON.stringify(data));
    } catch (error) {
      console.error('Error saving todos:', error)
    }
  }

  const loadTodos = async ()=>{
    try {
      const storedTodos = await AsyncStorage.getItem('todos');
      if (storedTodos) {
        setData(JSON.parse(storedTodos));
      }
    } catch (error) {
      console.error('Error loading todos:', error);
    }
  }

  const onSubmitTodo = () => {
    if (!todo) {
      Alert.alert("Warning", "Please enter your todo");
      return;
    }

    let now = new Date();
    let formattedDate = now.toLocaleDateString("en-US", { month: "short", day: "2-digit" }); // Feb 10
    let formattedTime = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }); // 10:30 AM

    let finaldata = {
      id: Date.now().toString(),
      title: todo,
      isCompleted: false,
      time: `${formattedDate}, ${formattedTime}`,
      
    };
    setData([...data, finaldata]);
    setTodo("");
    setOpen(false);
  }
  const deleteTodo = (idToDelete: string) => {
    setData(data.filter((todo) => todo.id !== idToDelete));
  };

  return (
    <View style={styles.Container}>
      <Header title="My Todo"  />
      <View style={styles.TodoContainer}>
        <FlatList data={data}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 10 }}
          ListEmptyComponent={() => <Text style={styles.NoDataFound}>No Data Found</Text>}
          renderItem={({ item,index }) => {
            return <TodoCard
              title={item.title}
              time={item.time}
              isCompleted={item.isCompleted}
              onPressDelete={() => deleteTodo(item.id)} />
          }} />

      </View>
      <AddTodo isActive={open}
        onClose={() => setOpen(false)}
        value={todo}
        onChangeText={(e) => setTodo(e)}
        onPressSubmit={onSubmitTodo} />
      <ActionButton onPress={() => setOpen(true)} />
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "white",
    flex: 1
  },
  TodoContainer: {
    padding: 20,
    gap: 10,
    paddingBottom:90
  },
  NoDataFound: {
    fontSize: 16,
    textAlign: "center",
    color: "grey",
    marginTop: 120,
  }
})
