import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiBell } from "react-icons/fi";
import { differenceInDays, formatDistanceToNow, parseISO } from "date-fns";
import { dataportfolio } from "../../content_option";
import "./style.css";

const Notifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [recentProjects, setRecentProjects] = useState([]);
  const dropdownRef = useRef(null);

  // Function to check if a project is recent (within last 30 days)
  const isRecentProject = (createdDate) => {
    const projectDate = parseISO(createdDate);
    const currentDate = new Date();
    const diffDays = differenceInDays(currentDate, projectDate);
    return diffDays <= 30;
  };

  // Function to format date using date-fns
  const formatDate = (dateString) => {
    const date = parseISO(dateString);
    return formatDistanceToNow(date, { addSuffix: true });
  };

  // Get recent projects on component mount
  useEffect(() => {
    const recent = dataportfolio
      .filter(project => isRecentProject(project.created))
      .sort((a, b) => {
        const dateA = parseISO(a.created);
        const dateB = parseISO(b.created);
        return dateB - dateA; // Sort by most recent first
      })
      .slice(0, 5); // Show only the 5 most recent projects
    
    setRecentProjects(recent);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleProjectClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="notifications-container" ref={dropdownRef}>
      <button 
        className="notification-bell" 
        onClick={toggleDropdown}
        aria-label="Notifications"
      >
        <FiBell className="bell-icon" />
        {recentProjects.length > 0 && (
          <span className="notification-badge">
            {recentProjects.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="notification-dropdown">
          <div className="notification-header">
            <h4>Recent Projects</h4>
            <span className="new-badge">New</span>
          </div>
          
          {recentProjects.length > 0 ? (
            <div className="notification-list">
              {recentProjects.map((project) => (
                <Link
                  key={project.id}
                  to={`/project/${project.id}`}
                  className="notification-item"
                  onClick={handleProjectClick}
                >
                  <div className="project-thumbnail">
                    <img src={project.img} alt={project.title} />
                  </div>
                  <div className="project-info">
                    <h5 className="project-title">{project.title}</h5>
                    <p className="project-description">{project.shortDescription}</p>
                    <span className="project-date">{formatDate(project.created)}</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="no-notifications">
              <p>No recent projects</p>
            </div>
          )}
          
          <div className="notification-footer">
            <Link to="/portfolio" onClick={handleProjectClick}>
              View All Projects
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
