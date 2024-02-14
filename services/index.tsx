import request, { gql } from "graphql-request";

export const getCarsList = async () => {
  const query = gql`
    query CarLists {
      carLists {
        carAvg
        createdAt
        id
        name
        price
        publishedAt
        updatedAt
        carType
        brand
        image {
          url
        }
      }
    }
  `;
  const result = await request(
    "https://api-ap-south-1.hygraph.com/v2/clscu6ar90e8801wjdcscces8/master",
    query
  );
  return result;
};

export const getStoreLocations = async () => {
  const query = gql`
    query storeLocation {
      storeLocations {
        address
      }
    }
  `;
  const result = await request(
    "https://api-ap-south-1.hygraph.com/v2/clscu6ar90e8801wjdcscces8/master",
    query
  );
  return result;
};

export const createBooking_ = async (storeData: any) => {
  const mutationQuery = gql`
    mutation MyMutation {
      createBooking(
        data: {
          userName: "Khadar"
          pickUpTime: ""
          pickUpDate: ""
          dropOffTime: ""
          dropOffDate: ""
          contactNumber: ""
          carId: { connect: { id: "clsd202z70lhs0bo1ws1y9p7j" } }
        }
      ) {
        id
      }
    }
  `;
  const result = await request(
    "https://api-ap-south-1.hygraph.com/v2/clscu6ar90e8801wjdcscces8/master",
    mutationQuery
  );
  return result;
};

export const createCarBooking = async (storeData: any) => {
  const mutationQuery =
    gql`
    mutation MyMutation {
      createCarBooking(
        data: {userName: "khada"
                  pickUpTime: "` +
    storeData.pickUpTime +
    `"
                 pickUpDate: "` +
    storeData.pickUpDate +
    `"
              dropOffTime: "` +
    storeData.dropOffTime +
    `"
                  dropOffDate: "` +
    storeData.dropOffDate +
    `",
               contactNumber:"` +
    storeData.contactNumber +
    `"
              
                 carId: { connect: { id: "` +
    storeData.carId +
    `" } }
           }
      ) {
        id
      }
    }
  `;
  const result = await request(
    "https://api-ap-south-1.hygraph.com/v2/clscu6ar90e8801wjdcscces8/master",
    mutationQuery
  );
  return result;
};
