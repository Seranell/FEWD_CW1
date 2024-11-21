import  { useEffect, useState, useCallback } from "react";

const useFetchData = () => {
    const [status, setStatus] = useState('idle');
    const [talks, setTalks]=useState([{
        id:"",
        speaker:"",
        title:"",
        description:"",
        session:"",
        time: "",
        tags: "",
      }]);

  const fetchData = useCallback(() => {
    const url = "http://localhost:3001/talks";
    fetch(url)
      .then((response) => response.json())
      .then((incomingData) => {
        console.log(incomingData)
        setTalks(incomingData);
        setStatus('fetched');
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { status, talks };
};
export default useFetchData;