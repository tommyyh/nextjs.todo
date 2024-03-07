'use client';
import { filterTasks } from '@/server/api/task';
import React from 'react';

const Filter = () => {
  return (
    <div>
      <label htmlFor="filter">Filter: </label>

      <select name="filter" id="filter">
        <option value="true">Completed</option>
        <option value="false">Incomplete</option>
        <option value="">Show all</option>
      </select>
    </div>
  );
};

export default Filter;
