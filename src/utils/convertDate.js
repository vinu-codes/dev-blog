const convertDateFn = (timestamp) => {
  const date = new Date(timestamp);
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  );
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day} ${year}`;
};

export { convertDateFn };
