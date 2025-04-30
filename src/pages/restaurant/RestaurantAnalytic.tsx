import React from 'react';
import NavbarRestaurant from '../../components/restaurant/NavbarRestaurant';
import { Download, FileText } from 'lucide-react';
import Card from '../../components/restaurant/card/UiCard';
import CommentsChart from '../../components/restaurant/analytic/CommentCard';
import MenuViewsChart from '../../components/restaurant/analytic/MenuViewsChart';

const RestaurantAnalytic: React.FC = () => {

  return (
    <div className="min-h-screen bg-base-100">
      <NavbarRestaurant />
      <div className="space-y-6 animate-fade-in w-[90%] m-auto mt-11">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Análisis</h1>
          <div>
            <button className="btn btn-primary">
              <FileText className="h-4 w-4 mr-2" />
              Export Data
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card
            title="Análisis de comentarios"
            action={
              <button className="text-sm text-gray-600 hover:text-gray-900">
                <Download className="h-4 w-4" />
              </button>
            }
          >
            <CommentsChart />
          </Card>

          <Card
            title="Menu Views Comparison"
            action={
              <button className="text-sm text-gray-600 hover:text-gray-900">
                <Download className="h-4 w-4" />
              </button>
            }
          >
            <div className='flex justify-center items-center'>
              <MenuViewsChart />
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Customer Insights">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-700">Most Viewed By</h3>
                <span className="text-sm text-gray-500">Past 30 days</span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">Female (25-34)</span>
                    <span className="text-sm font-medium">32%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-500 h-2 rounded-full" style={{ width: '32%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">Male (25-34)</span>
                    <span className="text-sm font-medium">28%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-500 h-2 rounded-full" style={{ width: '28%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">Female (18-24)</span>
                    <span className="text-sm font-medium">18%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-500 h-2 rounded-full" style={{ width: '18%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">Male (18-24)</span>
                    <span className="text-sm font-medium">15%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-500 h-2 rounded-full" style={{ width: '15%' }} />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card title="Popular Keywords">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-700">From Comments</h3>
                <span className="text-sm text-gray-500">Past 30 days</span>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">fresh</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">delicious</span>
                <span className="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm">healthy</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">tasty</span>
                <span className="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm">nutritious</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">flavorful</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">filling</span>
                <span className="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm">protein</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">satisfying</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">quick</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">colorful</span>
                <span className="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm">organic</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">clean</span>
              </div>

              <div className="flex items-center justify-between mt-6">
                <h3 className="text-sm font-medium text-gray-700">Negative Keywords</h3>
                <span className="text-sm text-gray-500">5% of comments</span>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">expensive</span>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">dry</span>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">bland</span>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">small portion</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RestaurantAnalytic;