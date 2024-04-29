import React, { useState, useEffect } from "react";
import JournalEntry from "../components/JournalEntry";
import Heading from "../components/Heading";
import { SafeAreaView, FlatList } from "react-native";

export default function HomeScreen({ route }) {
  const [journals, setJournals] = useState([
    {
      _id: "6625d8d6a13937dc7d394e88",
      name: "Learning Vite",
      author_First_Name: "Pedro",
      author_Last_Name: "Delgadillo",
      entry:
        "Okay, so I think I finally get Vite! No more messing with tons of config files. This is a game-changer for development speed . Gotta remember the commands though...",
      createdAt: "2024-04-22T03:26:14.695Z",
      __v: 0,
    },
    {
      _id: "6625d8dba13937dc7d394e8a",
      name: "React Router",
      author_First_Name: "Pedro",
      author_Last_Name: "Delgadillo",
      entry:
        "Started learning React Router today. My brain hurts a little, but I think I'm getting the hang of routing components. Need to practice those nested routes though!",
      createdAt: "2024-04-22T03:26:19.602Z",
      __v: 0,
    },
    {
      _id: "6625d8dfa13937dc7d394e8c",
      name: "Vercel Deployment",
      author_First_Name: "Pedro",
      author_Last_Name: "Delgadillo",
      entry:
        "Just deployed my first project to Vercel!  So easy and feels great to have it live. Now gotta figure out how to add a custom domain...",
      createdAt: "2024-04-22T03:26:23.982Z",
      __v: 0,
    },
    {
      _id: "6625f44f26093ad92e63c927",
      name: "React Training",
      author_First_Name: "Pedro",
      author_Last_Name: "Delgadillo",
      entry:
        "Today, I dove into learning some react! It was a fascinating journey. I found how simple it is to use images and use logic to check if that journal entry has an image. I want to implemnt a file upload that would be cool!",
      img: "/react.png",
      createdAt: "2024-04-22T05:23:27.939Z",
      __v: 0,
    },
    {
      _id: "662eb3e00e64d388835c9caf",
      name: "React Native and Multiple Deployments",
      author_First_Name: "Pedro",
      author_Last_Name: "Delgadillo",
      entry:
        "Learned React Native! Now exploring multiple deployments. build tools for platform deployment, and version control for managing changes. Feeling confident handling different app versions and environments!",
      createdAt: "2024-04-28T20:38:56.842Z",
      __v: 0,
    },
  ]);
  const API_BASE = "http://localhost:8000";

  useEffect(() => {
    fetch(`${API_BASE}/journals`)
      .then((response) => response.json())
      .then((data) => setJournals(data));
  }, []);



  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Heading title={"Memory Lane"} />
      <FlatList
        data={journals}
        renderItem={({ item }) => (
          <JournalEntry
            journal={item}
          />
        )}
        keyExtractor={(item) => item._id}
      />
    </SafeAreaView>
  );
}
