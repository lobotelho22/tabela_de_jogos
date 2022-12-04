type QueryInfo = {
  inProgress?: string;
};

function parseBoolean(queryInfo: QueryInfo): boolean | undefined {
  const { inProgress } = queryInfo;
  if (inProgress === undefined) { return undefined; }

  const booleanValue = inProgress.toLowerCase() === 'true';
  console.log(booleanValue);

  return booleanValue;
}

export default parseBoolean;
