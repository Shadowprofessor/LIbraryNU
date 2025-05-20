// ---------------------- utils/api.js ----------------------
export const getLiveBookCount = async (channelId, fieldId) => {
  const res = await fetch(`https://api.thingspeak.com/channels/${channelId}/fields/${fieldId}/last.json`);
  const data = await res.json();
  return data[`field${fieldId}`];
};
