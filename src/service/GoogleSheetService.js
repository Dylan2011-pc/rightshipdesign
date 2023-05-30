import axios from 'axios';

const fetchGoogleSheetData = async (spreadsheetId, range, apiKey) => {
  try {
    const response = await axios.get(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}`,
      {
        params: {
          key: apiKey,
        },
      }
    );

    return response.data.values;
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
    return [];
  }
};

export default fetchGoogleSheetData;
