import React, { useState } from 'react';
import './Dashboard.css';
import SentimentAnalysis from './SentimentAnalysis';
import EntityAnalysis from './EntityAnalysis';
import SyntacticAnalysis from './SyntacticAnalysis';
import EntitySentimentAnalysis from './EntitySentimentAnalysis';
import EntitySentimentAnalysisSentences from './ESAnalysisSentences';
import Button from '@mui/material/Button';

const Dashboard: React.FC = () => {
    const [text, setText] = useState<string>('');
    const [activeTab, setActiveTab] = useState<'sentiment' | 'entities' | 'syntax' | 'entitiesSentiment' | 'entitiesSentimentSentence'>('sentiment');
    const keepTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    }
    return (
        <div className="dashboard">
            <h1 className="dashboard-title">Enter/paste text to analyze</h1>
            <div className="tabs">
                <Button variant='contained'  onClick={() => setActiveTab('sentiment')} className={activeTab === 'sentiment' ? 'active' : ''}>
                    Sentiment Analysis
                </Button>
                <Button variant='contained' onClick={() => setActiveTab('entities')} className={activeTab === 'entities' ? 'active' : ''}>
                    Entity Analysis
                </Button>
                <Button variant='contained' onClick={() => setActiveTab('syntax')} className={activeTab === 'syntax' ? 'active' : ''}>
                    Syntactic Analysis
                </Button>
                <Button variant='contained' onClick={() => setActiveTab('entitiesSentiment')} className={activeTab === 'entitiesSentiment' ? 'active' : ''}>
                    Tokens Analysis
                </Button>
                <Button variant='contained' onClick={() => setActiveTab('entitiesSentimentSentence')} className={activeTab === 'entitiesSentimentSentence' ? 'active' : ''}>
                    Sentences Analysis
                </Button>
            </div>
            <div className="tab-content">
                {activeTab === 'sentiment' && <SentimentAnalysis text={text} onChange={keepTextChange}/>}
                {activeTab === 'entities' && <EntityAnalysis text={text} onChange={keepTextChange}/>}
                {activeTab === 'syntax' && <SyntacticAnalysis text={text} onChange={keepTextChange}/>}
                {activeTab === 'entitiesSentiment' && <EntitySentimentAnalysis text={text} onChange={keepTextChange}/>}
                {activeTab === 'entitiesSentimentSentence' && <EntitySentimentAnalysisSentences text={text} onChange={keepTextChange}/>}
            </div>
            
        </div>
    );
};

export default Dashboard;
