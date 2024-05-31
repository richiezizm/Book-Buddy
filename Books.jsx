import React from "react";
import {useState, useEffect} from "react";

fetch('/api/books/1', {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(console.error);

const books=() => {
    "id",
    "title",
    "author",
    "description",
    "coverimage",
    "availability"
};

export default books;