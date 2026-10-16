import '../styles/landing.css';
import './user-guide/user-guide.css';
import UserGuideContent from './user-guide/UserGuideContent';

export default function UserGuidePage() {
  return (
    <div className="landing-page">
      <UserGuideContent />
    </div>
  );
}
