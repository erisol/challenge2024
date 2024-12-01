const renderChallenges = (container, challenge) => {
  container.innerHTML = "";
  const imageStart = `<img src="`;
  const imageEnd = `" width="33%" height="33%" />`;
  const imageFormat = ".gif";
  const url = `https://services1.ultimate.dk/events/2024/run/omxmaschallenge//template/icons/activity/${challenge}/`;
  for (let i = 1; i <= 24; i++) {
    container.innerHTML += imageStart + url + i + imageFormat + imageEnd;
  }
}
