// pages/nested.js
import { useRouter } from 'next/router';

const Nested = () => {
  const router = useRouter();

  const { nestedPage } = router.query;

  return (
    <div>
      <h1>Main Page</h1>
      <ul>
        <li>
          <a onClick={() => router.push('/nested/page1')}>
            Nested Page 1
          </a>
        </li>
        <li>
          <a onClick={() => router.push('/nested/page2')}>
            Nested Page 2
          </a>
        </li>
      </ul>
      <div>
        {nestedPage === 'page1' && <NestedPage1 />}
        {nestedPage === 'page2' && <NestedPage2 />}
      </div>
    </div>
  );
};

const NestedPage1 = () => (
  <div>
    <h2>Nested Page 1</h2>
    <p>This is Nested Page 1 content.</p>
  </div>
);

const NestedPage2 = () => (
  <div>
    <h2>Nested Page 2</h2>
    <p>This is Nested Page 2 content.</p>
  </div>
);

export default Nested;
