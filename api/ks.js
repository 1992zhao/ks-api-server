// 快手极速版模拟接口
export default function handler(req, res) {
  if (req.url.includes('/user/info')) {
    return res.json({
      result: 1,
      data: { userId: '123456', nickname: '测试用户', gold: 1500 }
    });
  }
  if (req.url.includes('/account/balance')) {
    return res.json({
      result: 1,
      data: { gold: 1500, balance: 12.5 }
    });
  }
  if (req.url.includes('/task/all')) {
    return res.json({
      result: 1,
      data: [{ taskId: 'ad_001', taskName: '看广告得金币', reward: 10 }]
    });
  }
  if (req.url.includes('/task/treasurebox')) {
    return res.json({
      result: 1,
      data: { taskId: 'task_' + Date.now(), reward: 15 }
    });
  }
  res.json({ result: 1, message: 'success' });
}
