import JournalCard from "../components/JournalCard";
import { View } from "react-native";

export default function DetailsScreen({route}) {
    const { journal } = route.params;
    console.log(journal)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <JournalCard journal={journal}/>
    </View>
  );
}