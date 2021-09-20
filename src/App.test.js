import React from 'react';
import { act, render, screen, cleanup, waitFor, waitForOptions, waitForElementToBeRemoved } from "@testing-library/react";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import App from "./App";

function factoryReview({rating, publish_date, body, author}) {
  return {
    id: uuidv4(),
    rating,
    publish_date,
    body,
    author
  }
}

const stubbedReviews = [
  factoryReview({
    "rating": 0.8,
    "publish_date": "2016-09-05T23:25:47.642350Z",
    "body": "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    "author": "Kaley Schiller"
  }),
  factoryReview({
    "rating": 3.2,
    "publish_date": "2016-09-04T23:25:47.642388Z",
    "body": "Can one desire too much of a good thing?.",
    "author": "Fay Lemke"
  }),
  factoryReview({
    "rating": 4.1,
    "publish_date": "2016-09-03T23:25:47.642545Z",
    "body": "How bitter a thing it is to look into happiness through another man's eyes!",
    "author": "Tatyana Olson"
  })
]

beforeEach(() => {
  axios.get = jest.fn(() => Promise.resolve({data: stubbedReviews}))
})

describe("App", () => {
  it("displays loading while fetching reviews", async () => {
    await act(async () => {
      render(<App />);
      screen.getByRole('heading', {name: /Loading.../i});
    })
  });

  it("removes text for loading after displaying reviews", async () => {
    await act(async() => {
      render(<App></App>)
      await waitForElementToBeRemoved(() => screen.getByRole('heading', {name: /Loading.../i}), {timeout: 3000})
    })
  })

  it("displays the reviews from Shakepeare's API", async () => {
    async() => {
      render(<App></App>)
      const review = await screen.findByRole('gridcell', {name: stubbedReviews[0].body})
      screen.getByRole('gridcell', {name: stubbedReviews[1].body})
      screen.getByRole('gridcell', {name: stubbedReviews[2].body})
      expect(review).toBeInTheDocument
      
    }
  })
});
