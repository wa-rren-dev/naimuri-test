export function OrgOverview({ orgName, avatar_url, html_url }) {
  return (
    <>
      <h1>
        List of <a href={html_url}>{orgName}</a> repositories
      </h1>
      {avatar_url && (
        <img
          width="100"
          src={avatar_url}
          alt={`Avatar for ${{ orgName }}`}
          aria-hidden={true}
        />
      )}
    </>
  );
}
